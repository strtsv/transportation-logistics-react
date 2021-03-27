"use strict";
(function () {
	// Global variables
	var userAgent = navigator.userAgent.toLowerCase(),
		initialDate = new Date(),

		$document = $(document),
		$window = $(window),
		$html = $("html"),
		$body = $("body"),

		isDesktop = $html.hasClass("desktop"),
		isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		windowReady = false,
		isNoviBuilder = false,
		livedemo = true,
		plugins = {
			accordion: $('.accordion'),
			campaignMonitor: $('.campaign-mailform'),
			captcha: $('.recaptcha'),
			checkbox: $("input[type='checkbox']"),
			copyrightYear: $(".copyright-year"),
			mailchimp: $('.mailchimp-mailform'),
			maps: $(".google-map-container"),
			materialParallax: $(".parallax-container"),
			owl: $(".owl-carousel"),
			parallax: $('.parallax'),
			preloader: $(".preloader"),
			radio: $("input[type='radio']"),
			rdInputLabel: $(".form-label"),
			rdMailForm: $(".rd-mailform"),
			rdNavbar: $(".rd-navbar"),
			regula: $("[data-constraints]"),
			responsiveTabs: $('.resp-tabs'),
			ripple: $('.js-ripple'),
			stackeble: $('.pricing-table'),
			wow: $(".wow")
		};


	// Initialize scripts that require a loaded page
	$window.on('load', function () {
		// Page loader & Page transition
		if (plugins.preloader.length && !isNoviBuilder) {
			pageTransition({
				target: document.querySelector( '.page' ),
				delay: 0,
				duration: 500,
				classIn: 'fadeIn',
				classOut: 'fadeOut',
				classActive: 'animated',
				conditions: function (event, link) {
					return !/(\#|callto:|tel:|mailto:|:\/\/)/.test(link) && !event.currentTarget.hasAttribute('data-lightgallery');
				},
				onTransitionStart: function ( options ) {
					setTimeout( function () {
						plugins.preloader.removeClass('loaded');
					}, options.duration * .75 );
				},
				onReady: function () {
					plugins.preloader.addClass('loaded');
					windowReady = true;
				}
			});
		}
	});


	// Initialize scripts that require a finished document
	$(function () {
		isNoviBuilder = window.xMode;

		/**
		 * @desc Check the element whas been scrolled into the view
		 * @param {object} elem - jQuery object
		 * @return {boolean}
		 */
		function isScrolledIntoView(elem) {
			if (!isNoviBuilder) {
				return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
			}
			else {
				return true;
			}
		}

		/**
		 * @desc Calls a function when element has been scrolled into the view
		 * @param {object} element - jQuery object
		 * @param {function} func - callback function
		 */
		function lazyInit(element, func) {
			$document.on('scroll', function () {
				if ((!element.hasClass('lazy-loaded') && (isScrolledIntoView(element)))) {
					func.call();
					element.addClass('lazy-loaded');
				}
			}).trigger("scroll");
		}

		/**
		 * @desc Attach form validation to elements
		 * @param {object} elements - jQuery object
		 */
		function attachFormValidator(elements) {
			// Custom validator - phone number
			regula.custom({
				name: 'PhoneNumber',
				defaultMessage: 'Invalid phone number format',
				validator: function() {
					if ( this.value === '' ) return true;
					else return /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test( this.value );
				}
			});

			for (var i = 0; i < elements.length; i++) {
				var o = $(elements[i]), v;
				o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
				v = o.parent().find(".form-validation");
				if (v.is(":last-child")) o.addClass("form-control-last-child");
			}

			elements.on('input change propertychange blur', function (e) {
				var $this = $(this), results;

				if (e.type !== "blur") if (!$this.parent().hasClass("has-error")) return;
				if ($this.parents('.rd-mailform').hasClass('success')) return;

				if (( results = $this.regula('validate') ).length) {
					for (i = 0; i < results.length; i++) {
						$this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error");
					}
				} else {
					$this.siblings(".form-validation").text("").parent().removeClass("has-error")
				}
			}).regula('bind');

			var regularConstraintsMessages = [
				{
					type: regula.Constraint.Required,
					newMessage: "The text field is required."
				},
				{
					type: regula.Constraint.Email,
					newMessage: "The email is not a valid email."
				},
				{
					type: regula.Constraint.Numeric,
					newMessage: "Only numbers are required"
				},
				{
					type: regula.Constraint.Selected,
					newMessage: "Please choose an option."
				}
			];


			for (var i = 0; i < regularConstraintsMessages.length; i++) {
				var regularConstraint = regularConstraintsMessages[i];

				regula.override({
					constraintType: regularConstraint.type,
					defaultMessage: regularConstraint.newMessage
				});
			}
		}

		/**
		 * @desc Check if all elements pass validation
		 * @param {object} elements - object of items for validation
		 * @param {object} captcha - captcha object for validation
		 * @return {boolean}
		 */
		function isValidated(elements, captcha) {
			var results, errors = 0;

			if (elements.length) {
				for (var j = 0; j < elements.length; j++) {

					var $input = $(elements[j]);
					if ((results = $input.regula('validate')).length) {
						for (k = 0; k < results.length; k++) {
							errors++;
							$input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
						}
					} else {
						$input.siblings(".form-validation").text("").parent().removeClass("has-error")
					}
				}

				if (captcha) {
					if (captcha.length) {
						return validateReCaptcha(captcha) && errors === 0
					}
				}

				return errors === 0;
			}
			return true;
		}

		/**
		 * @desc Validate google reCaptcha
		 * @param {object} captcha - captcha object for validation
		 * @return {boolean}
		 */
		function validateReCaptcha(captcha) {
			var captchaToken = captcha.find('.g-recaptcha-response').val();

			if (captchaToken.length === 0) {
				captcha
					.siblings('.form-validation')
					.html('Please, prove that you are not robot.')
					.addClass('active');
				captcha
					.closest('.form-wrap')
					.addClass('has-error');

				captcha.on('propertychange', function () {
					var $this = $(this),
						captchaToken = $this.find('.g-recaptcha-response').val();

					if (captchaToken.length > 0) {
						$this
							.closest('.form-wrap')
							.removeClass('has-error');
						$this
							.siblings('.form-validation')
							.removeClass('active')
							.html('');
						$this.off('propertychange');
					}
				});

				return false;
			}

			return true;
		}

		/**
		 * @desc Initialize Google reCaptcha
		 */
		window.onloadCaptchaCallback = function () {
			for (var i = 0; i < plugins.captcha.length; i++) {
				var $capthcaItem = $(plugins.captcha[i]);

				grecaptcha.render(
					$capthcaItem.attr('id'),
					{
						sitekey: $capthcaItem.attr('data-sitekey'),
						size: $capthcaItem.attr('data-size') ? $capthcaItem.attr('data-size') : 'normal',
						theme: $capthcaItem.attr('data-theme') ? $capthcaItem.attr('data-theme') : 'light',
						callback: function (e) {
							$('.recaptcha').trigger('propertychange');
						}
					}
				);
				$capthcaItem.after("<span class='form-validation'></span>");
			}
		};

		// Google ReCaptcha
		if (plugins.captcha.length) {
			$.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en");
		}



		/**
		 * Google map function for getting latitude and longitude
		 */
		function getLatLngObject(str, marker, map, callback) {
			var coordinates = {};
			try {
				coordinates = JSON.parse(str);
				callback(new google.maps.LatLng(
					coordinates.lat,
					coordinates.lng
				), marker, map)
			} catch (e) {
				map.geocoder.geocode({'address': str}, function (results, status) {
					if (status === google.maps.GeocoderStatus.OK) {
						var latitude = results[0].geometry.location.lat();
						var longitude = results[0].geometry.location.lng();

						callback(new google.maps.LatLng(
							parseFloat(latitude),
							parseFloat(longitude)
						), marker, map)
					}
				})
			}
		}

		// UI To Top
		if (isDesktop && !isNoviBuilder) {
			$().UItoTop({
				easingType: 'easeOutQuad',
				containerClass: 'ui-to-top fa fa-angle-up'
			});
		}

		// Google maps
		if( plugins.maps.length ) {
			$.getScript("//maps.google.com/maps/api/js?key=AIzaSyAwH60q5rWrS8bXwpkZwZwhw9Bw0pqKTZM&sensor=false&libraries=geometry,places&v=3.7", function () {
				var head = document.getElementsByTagName('head')[0],
					insertBefore = head.insertBefore;

				head.insertBefore = function (newElement, referenceElement) {
					if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') !== -1 || newElement.innerHTML.indexOf('gm-style') !== -1) {
						return;
					}
					insertBefore.call(head, newElement, referenceElement);
				};
				var geocoder = new google.maps.Geocoder;
				for (var i = 0; i < plugins.maps.length; i++) {
					var zoom = parseInt(plugins.maps[i].getAttribute("data-zoom"), 10) || 11;
					var styles = plugins.maps[i].hasAttribute('data-styles') ? JSON.parse(plugins.maps[i].getAttribute("data-styles")) : [];
					var center = plugins.maps[i].getAttribute("data-center") || "New York";

					// Initialize map
					var map = new google.maps.Map(plugins.maps[i].querySelectorAll(".google-map")[0], {
						zoom: zoom,
						styles: styles,
						scrollwheel: false,
						center: {lat: 0, lng: 0}
					});
					// Add map object to map node
					plugins.maps[i].map = map;
					plugins.maps[i].geocoder = geocoder;
					plugins.maps[i].google = google;

					// Get Center coordinates from attribute
					getLatLngObject(center, null, plugins.maps[i], function (location, markerElement, mapElement) {
						mapElement.map.setCenter(location);
					})

					// Add markers from google-map-markers array
					var markerItems = plugins.maps[i].querySelectorAll(".google-map-markers li");

					if (markerItems.length){
						var markers = [];
						for (var j = 0; j < markerItems.length; j++){
							var markerElement = markerItems[j];
							getLatLngObject(markerElement.getAttribute("data-location"), markerElement, plugins.maps[i], function(location, markerElement, mapElement){
								var icon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon");
								var activeIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active");
								var info = markerElement.getAttribute("data-description") || "";
								var infoWindow = new google.maps.InfoWindow({
									content: info
								});
								markerElement.infoWindow = infoWindow;
								var markerData = {
									position: location,
									map: mapElement.map
								}
								if (icon){
									markerData.icon = icon;
								}
								var marker = new google.maps.Marker(markerData);
								markerElement.gmarker = marker;
								markers.push({markerElement: markerElement, infoWindow: infoWindow});
								marker.isActive = false;
								// Handle infoWindow close click
								google.maps.event.addListener(infoWindow,'closeclick',(function(markerElement, mapElement){
									var markerIcon = null;
									markerElement.gmarker.isActive = false;
									markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon");
									markerElement.gmarker.setIcon(markerIcon);
								}).bind(this, markerElement, mapElement));


								// Set marker active on Click and open infoWindow
								google.maps.event.addListener(marker, 'click', (function(markerElement, mapElement) {
									if (markerElement.infoWindow.getContent().length === 0) return;
									var gMarker, currentMarker = markerElement.gmarker, currentInfoWindow;
									for (var k =0; k < markers.length; k++){
										var markerIcon;
										if (markers[k].markerElement === markerElement){
											currentInfoWindow = markers[k].infoWindow;
										}
										gMarker = markers[k].markerElement.gmarker;
										if (gMarker.isActive && markers[k].markerElement !== markerElement){
											gMarker.isActive = false;
											markerIcon = markers[k].markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")
											gMarker.setIcon(markerIcon);
											markers[k].infoWindow.close();
										}
									}

									currentMarker.isActive = !currentMarker.isActive;
									if (currentMarker.isActive) {
										if (markerIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active")){
											currentMarker.setIcon(markerIcon);
										}

										currentInfoWindow.open(map, marker);
									}else{
										if (markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")){
											currentMarker.setIcon(markerIcon);
										}
										currentInfoWindow.close();
									}
								}).bind(this, markerElement, mapElement))
							})
						}
					}
				}
			});
		}

		// Add custom styling options for input[type="radio"]
		if (plugins.radio.length) {
			for (var i = 0; i < plugins.radio.length; i++) {
				$(plugins.radio[i]).addClass("radio-custom").after("<span class='radio-custom-dummy'></span>")
			}
		}

		// Add custom styling options for input[type="checkbox"]
		if (plugins.checkbox.length) {
			for (var i = 0; i < plugins.checkbox.length; i++) {
				$(plugins.checkbox[i]).addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>")
			}
		}

		// RD Input Label
		if (plugins.rdInputLabel.length) {
			plugins.rdInputLabel.RDInputLabel();
		}

		// Regula
		if (plugins.regula.length) {
			attachFormValidator(plugins.regula);
		}

		// MailChimp Ajax subscription
		if (plugins.mailchimp.length) {
			for (i = 0; i < plugins.mailchimp.length; i++) {
				var $mailchimpItem = $(plugins.mailchimp[i]),
					$email = $mailchimpItem.find('input[type="email"]');

				// Required by MailChimp
				$mailchimpItem.attr('novalidate', 'true');
				$email.attr('name', 'EMAIL');

				$mailchimpItem.on('submit', $.proxy( function ( $email, event ) {
					event.preventDefault();

					var $this = this;

					var data = {},
						url = $this.attr('action').replace('/post?', '/post-json?').concat('&c=?'),
						dataArray = $this.serializeArray(),
						$output = $("#" + $this.attr("data-form-output"));

					for (i = 0; i < dataArray.length; i++) {
						data[dataArray[i].name] = dataArray[i].value;
					}

					$.ajax({
						data: data,
						url: url,
						dataType: 'jsonp',
						error: function (resp, text) {
							$output.html('Server error: ' + text);

							setTimeout(function () {
								$output.removeClass("active");
							}, 4000);
						},
						success: function (resp) {
							$output.html(resp.msg).addClass('active');
							$email[0].value = '';
							var $label = $('[for="'+ $email.attr( 'id' ) +'"]');
							if ( $label.length ) $label.removeClass( 'focus not-empty' );

							setTimeout(function () {
								$output.removeClass("active");
							}, 6000);
						},
						beforeSend: function (data) {
							var isNoviBuilder = window.xMode;

							var isValidated = (function () {
								var results, errors = 0;
								var elements = $this.find('[data-constraints]');
								var captcha = null;
								if (elements.length) {
									for (var j = 0; j < elements.length; j++) {

										var $input = $(elements[j]);
										if ((results = $input.regula('validate')).length) {
											for (var k = 0; k < results.length; k++) {
												errors++;
												$input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
											}
										} else {
											$input.siblings(".form-validation").text("").parent().removeClass("has-error")
										}
									}

									if (captcha) {
										if (captcha.length) {
											return validateReCaptcha(captcha) && errors === 0
										}
									}

									return errors === 0;
								}
								return true;
							})();

							// Stop request if builder or inputs are invalide
							if (isNoviBuilder || !isValidated)
								return false;

							$output.html('Submitting...').addClass('active');
						}
					});

					return false;
				}, $mailchimpItem, $email ));
			}
		}

		// Campaign Monitor ajax subscription
		if (plugins.campaignMonitor.length) {
			for (i = 0; i < plugins.campaignMonitor.length; i++) {
				var $campaignItem = $(plugins.campaignMonitor[i]);

				$campaignItem.on('submit', $.proxy(function (e) {
					var data = {},
						url = this.attr('action'),
						dataArray = this.serializeArray(),
						$output = $("#" + plugins.campaignMonitor.attr("data-form-output")),
						$this = $(this);

					for (i = 0; i < dataArray.length; i++) {
						data[dataArray[i].name] = dataArray[i].value;
					}

					$.ajax({
						data: data,
						url: url,
						dataType: 'jsonp',
						error: function (resp, text) {
							$output.html('Server error: ' + text);

							setTimeout(function () {
								$output.removeClass("active");
							}, 4000);
						},
						success: function (resp) {
							$output.html(resp.Message).addClass('active');

							setTimeout(function () {
								$output.removeClass("active");
							}, 6000);
						},
						beforeSend: function (data) {
							// Stop request if builder or inputs are invalide
							if (isNoviBuilder || !isValidated($this.find('[data-constraints]')))
								return false;

							$output.html('Submitting...').addClass('active');
						}
					});

					// Clear inputs after submit
					var inputs = $this[0].getElementsByTagName('input');
					for (var i = 0; i < inputs.length; i++) {
						inputs[i].value = '';
						var label = document.querySelector( '[for="'+ inputs[i].getAttribute( 'id' ) +'"]' );
						if( label ) label.classList.remove( 'focus', 'not-empty' );
					}

					return false;
				}, $campaignItem));
			}
		}

		// RD Mailform
		if (plugins.rdMailForm.length) {
			var i, j, k,
				msg = {
					'MF000': 'Successfully sent!',
					'MF001': 'Recipients are not set!',
					'MF002': 'Form will not work locally!',
					'MF003': 'Please, define email field in your form!',
					'MF004': 'Please, define type of your form!',
					'MF254': 'Something went wrong with PHPMailer!',
					'MF255': 'Aw, snap! Something went wrong.'
				};

			for (i = 0; i < plugins.rdMailForm.length; i++) {
				var $form = $(plugins.rdMailForm[i]),
					formHasCaptcha = false;

				$form.attr('novalidate', 'novalidate').ajaxForm({
					data: {
						"form-type": $form.attr("data-form-type") || "contact",
						"counter": i
					},
					beforeSubmit: function (arr, $form, options) {
						if (isNoviBuilder)
							return;

						var form = $(plugins.rdMailForm[this.extraData.counter]),
							inputs = form.find("[data-constraints]"),
							output = $("#" + form.attr("data-form-output")),
							captcha = form.find('.recaptcha'),
							captchaFlag = true;

						output.removeClass("active error success");

						if (isValidated(inputs, captcha)) {

							// veify reCaptcha
							if (captcha.length) {
								var captchaToken = captcha.find('.g-recaptcha-response').val(),
									captchaMsg = {
										'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha',
										'CPT002': 'Something wrong with google reCaptcha'
									};

								formHasCaptcha = true;

								$.ajax({
									method: "POST",
									url: "bat/reCaptcha.php",
									data: {'g-recaptcha-response': captchaToken},
									async: false
								})
									.done(function (responceCode) {
										if (responceCode !== 'CPT000') {
											if (output.hasClass("snackbars")) {
												output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + captchaMsg[responceCode] + '</span></p>')

												setTimeout(function () {
													output.removeClass("active");
												}, 3500);

												captchaFlag = false;
											} else {
												output.html(captchaMsg[responceCode]);
											}

											output.addClass("active");
										}
									});
							}

							if (!captchaFlag) {
								return false;
							}

							form.addClass('form-in-process');

							if (output.hasClass("snackbars")) {
								output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
								output.addClass("active");
							}
						} else {
							return false;
						}
					},
					error: function (result) {
						if (isNoviBuilder)
							return;

						var output = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output")),
							form = $(plugins.rdMailForm[this.extraData.counter]);

						output.text(msg[result]);
						form.removeClass('form-in-process');

						if (formHasCaptcha) {
							grecaptcha.reset();
						}
					},
					success: function (result) {
						if (isNoviBuilder)
							return;

						var form = $(plugins.rdMailForm[this.extraData.counter]),
							output = $("#" + form.attr("data-form-output")),
							select = form.find('select');

						form
							.addClass('success')
							.removeClass('form-in-process');

						if (formHasCaptcha) {
							grecaptcha.reset();
						}

						result = result.length === 5 ? result : 'MF255';
						output.text(msg[result]);

						if (result === "MF000") {
							if (output.hasClass("snackbars")) {
								output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + msg[result] + '</span></p>');
							} else {
								output.addClass("active success");
							}
						} else {
							if (output.hasClass("snackbars")) {
								output.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + msg[result] + '</span></p>');
							} else {
								output.addClass("active error");
							}
						}

						form.clearForm();

						if (select.length) {
							select.select2("val", "");
						}

						form.find('input, textarea').trigger('blur');

						setTimeout(function () {
							output.removeClass("active error success");
							form.removeClass('success');
						}, 3500);
					}
				});
			}
		}

		// Copyright Year (Evaluates correct copyright year)
		if (plugins.copyrightYear.length) {
			plugins.copyrightYear.text(initialDate.getFullYear());
		}

		// Responsive Tabs
		if (plugins.responsiveTabs.length) {
			for (var i = 0; i < plugins.responsiveTabs.length; i++) {
				var responsiveTabsItem = $(plugins.responsiveTabs[i]);

				responsiveTabsItem.easyResponsiveTabs();
			}
		}

		// JQuery UI Accordion
		if (plugins.accordion.length) {
			for (var i = 0; i < plugins.accordion.length; i++) {
				var accordionItem = $(plugins.accordion[i]);

				accordionItem.accordion({
					active: false,
					header: '.accordion_header',
					heightStyle: 'content',
					collapsible: true
				});
			}
		}


		// WOW
		if ($html.hasClass("wow-animation") && plugins.wow.length && !isNoviBuilder && isDesktop) {
			new WOW().init();
		}

		// Stacktable
		if (plugins.stackeble.length) {
			for (var i = 0; i < plugins.stackeble.length; i++) {
				var stackebleItem = $(plugins.stackeble[i]);

				stackebleItem.stacktable();
			}
		}

		// RD Navbar
		if (plugins.rdNavbar.length) {
			var aliaces, i, j, len, value, values, responsiveNavbar;

			aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"];
			values = [0, 576, 768, 992, 1200, 1600];
			responsiveNavbar = {};

			for (i = j = 0, len = values.length; j < len; i = ++j) {
				value = values[i];
				if (!responsiveNavbar[values[i]]) {
					responsiveNavbar[values[i]] = {};
				}
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'layout')) {
					responsiveNavbar[values[i]].layout = plugins.rdNavbar.attr('data' + aliaces[i] + 'layout');
				}
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'device-layout')) {
					responsiveNavbar[values[i]]['deviceLayout'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'device-layout');
				}
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'hover-on')) {
					responsiveNavbar[values[i]]['focusOnHover'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'hover-on') === 'true';
				}
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'auto-height')) {
					responsiveNavbar[values[i]]['autoHeight'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'auto-height') === 'true';
				}

				if (isNoviBuilder) {
					responsiveNavbar[values[i]]['stickUp'] = false;
				} else if (plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up')) {
					responsiveNavbar[values[i]]['stickUp'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up') === 'true';
				}

				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset')) {
					responsiveNavbar[values[i]]['stickUpOffset'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset');
				}
			}


			plugins.rdNavbar.RDNavbar({
				anchorNav: !isNoviBuilder,
				stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
				responsive: responsiveNavbar,
				callbacks: {
					onStuck: function () {
						var navbarSearch = this.$element.find('.rd-search input');

						if (navbarSearch) {
							navbarSearch.val('').trigger('propertychange');
						}
					},
					onDropdownOver: function () {
						return !isNoviBuilder;
					},
					onUnstuck: function () {
						if (this.$clone === null)
							return;

						var navbarSearch = this.$clone.find('.rd-search input');

						if (navbarSearch) {
							navbarSearch.val('').trigger('propertychange');
							navbarSearch.trigger('blur');
						}

					}
				}
			});


			if (plugins.rdNavbar.attr("data-body-class")) {
				document.body.className += ' ' + plugins.rdNavbar.attr("data-body-class");
			}
		}

		// Ripple click
		if (plugins.ripple.length) {

				for (var i = 0; i < plugins.ripple.length; i++) {
					var rippleItem = $(plugins.ripple[i]);



				}

			;(function($, window, document, undefined) {

				'use strict';

				var $ripple = $('.js-ripple');

				$ripple.on('click.ui.ripple', function(e) {

					var $this = $(this);
					var $offset = $this.parent().offset();
					var $circle = $this.find('.c-ripple__circle');

					var x = e.pageX - $offset.left;
					var y = e.pageY - $offset.top;

					$circle.css({
						top: y + 'px',
						left: x + 'px'
					});
					$this.addClass('is-active');
				});

				$ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
					$(this).removeClass('is-active');
				});
			})(jQuery, window, document);

		}


		// Material Parallax
		if (plugins.materialParallax.length) {
			if (!isNoviBuilder && !isIE && !isMobile) {
				plugins.materialParallax.parallax();

				// heavy pages fix
				$window.on('load', function () {
					setTimeout(function () {
						$window.scroll();
					}, 500);
				});
			} else {
				for (var i = 0; i < plugins.materialParallax.length; i++) {
					var parallax = $(plugins.materialParallax[i]),
						imgPath = parallax.data("parallax-img");

					parallax.css({
						"background-image": 'url(' + imgPath + ')',
						"background-size": "cover"
					});
				}
			}
		}

	})
}());


