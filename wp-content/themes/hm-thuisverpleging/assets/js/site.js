/* H.M Thuisverpleging – menu, scroll-knop en animaties */
(function () {
	'use strict';

	// Mobiel menu
	var toggle = document.getElementById('menu-toggle');
	var links = document.getElementById('nav-links');
	if (toggle && links) {
		toggle.addEventListener('click', function () {
			var open = links.classList.toggle('active');
			toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
			toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
		});
		links.addEventListener('click', function (e) {
			if (e.target.tagName === 'A') {
				links.classList.remove('active');
				toggle.setAttribute('aria-expanded', 'false');
			}
		});
	}

	// Terug naar boven
	var btn = document.getElementById('scrollTopBtn');
	if (btn) {
		window.addEventListener('scroll', function () {
			btn.classList.toggle('show', window.scrollY > 300);
		}, { passive: true });
		btn.addEventListener('click', function () {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}

	// Inschuif-animaties
	var items = document.querySelectorAll('.reveal');
	if (!('IntersectionObserver' in window)) {
		items.forEach(function (el) { el.classList.add('visible'); });
		return;
	}
	var observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.15 });
	items.forEach(function (el) { observer.observe(el); });
})();
