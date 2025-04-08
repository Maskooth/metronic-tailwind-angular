import { Component, HostBinding, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {

	@ViewChild('menu', { static: false }) menu: any;

	@HostBinding('class') hostClass = 'header fixed top-0 z-10 left-0 right-0 flex items-stretch shrink-0 bg-[#fefefe] dark:bg-coal-500 shadow-sm dark:border-b dark:border-b-coal-100';
	@HostBinding('attr.role') hostRole = 'banner';
	@HostBinding('attr.data-sticky') dataSticky = 'true';
	@HostBinding('attr.data-sticky-name') dataStickyName = 'header';
	@HostBinding('id') hostId = 'header';
	constructor(private router: Router) {
		
	}
	navigateTo(path: string) {
		this.router.navigate(['/profile', path]);
		
		setTimeout(() => {
			const dropdown = document.getElementById('main_menu_dropdown');
			if (dropdown) {
			  dropdown.classList.remove('show');
			  dropdown.style.display = 'none';
			}
		  
		const parentMenu = dropdown?.closest('.menu-item');
		if (parentMenu) {
		  parentMenu.classList.remove('hover', 'show');
		}
	  
	}, 100); 

	}
}
