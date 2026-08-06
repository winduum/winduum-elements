declare module 'winduum-elements/components/button/index.js' {
	export function Button<T extends CustomElementConstructor>(Element: T): T;

	export {};
}

declare module 'winduum-elements/components/carousel-experimental/index.js' {
	import type { WebuumElement } from 'webuum';
	export class Carousel extends WebuumElement {
		static parts: {
			$content: null;
			$markerGroup: null;
			$marker: null;
			$prev: null;
			$next: null;
		};
		static props: {
			$vertical: boolean;
		};
		connectedCallback(): Promise<void>;
		$scroll(direction: any): Promise<void>;
		scrollPrev(): void;
		scrollNext(): void;
	}

	export {};
}

declare module 'winduum-elements/components/carousel/index.js' {
	import type { WebuumElement } from 'webuum';
	export class Carousel extends WebuumElement {
		static parts: {
			$content: null;
			$counterMin: null;
			$counterMax: null;
			$pagination: null;
			$progress: null;
			$prev: null;
			$next: null;
		};
		$paginationItemContent: string;
		connectedCallback(): Promise<void>;
		scroll(): Promise<void>;
		toggleScrollAttributes(): void;
		scrollPrev(): void;
		scrollNext(): void;
		
		scrollTo(options?: ScrollToOptions | undefined): void;
		
		scrollTo(x: number, y: number): void;
		
		scrollTo(options: {
			source: HTMLElement;
		}): Promise<void>;
	}

	export {};
}

declare module 'winduum-elements/components/compare/index.js' {
	import type { WebuumElement } from 'webuum';
	export class Compare extends WebuumElement {
		
		$keyboardStep: string;
		
		$mouseStep: string;
		
		$positionOptions: import("winduum/src/components/compare/index.d.ts").SetPositionOptions;
		connectedCallback(): void;
		setPosition({ target }: {
			target: any;
		}): Promise<void>;
		setKeyboardStep({ key, target }: {
			key: any;
			target: any;
		}): Promise<void>;
		setMouseStep({ target }: {
			target: any;
		}): Promise<void>;
	}

	export {};
}

declare module 'winduum-elements/components/control/index.js' {
	import type { WebuumElement } from 'webuum';
	export class Control extends WebuumElement {
		$activeAttribute: string;
		connectedCallback(): void;
		toggleActiveAttribute(): void;
		stepUp(): void;
		stepDown(): void;
		showPicker(): void;
	}

	export {};
}

declare module 'winduum-elements/components/details/index.js' {
	export class Details extends HTMLDetailsElement {
		
		$toggleOptions: import("winduum/src/components/details/index.d.ts").ToggleDetailsOptions;
		connectedCallback(): void;
		disconnectedCallback(): void;
		toggleDetails({ target }: {
			target: any;
		}): Promise<void>;
	}

	export {};
}

declare module 'winduum-elements/components/drawer/index.js' {
	export class Drawer extends HTMLDialogElement {
		static parts: {
			$content: null;
		};
		static props: {
			$placement: string;
			$modal: boolean;
		};
		partConnectedCallback(name: any): Promise<void>;
		$observer: IntersectionObserver | undefined;
		partDisconnectedCallback(name: any): void;
		
		showModal(): void;
		
		showModal(options: {
			source: HTMLElement;
		}): Promise<void>;
		$triggerElement: HTMLElement | undefined;
		close(): void;
	}

	export {};
}

declare module 'winduum-elements/components/field/index.js' {
	import type { WebuumElement } from 'webuum';
	export class Field extends WebuumElement {
		
		$validateFieldOptions: import("winduum/src/components/field/index.d.ts").ValidateFieldOptions;
		connectedCallback(): void;
	}

	export {};
}

declare module 'winduum-elements/components/form/index.js' {
	export class Form extends HTMLFormElement {
		
		$validateFormOptions: import("winduum/src/components/form/index.d.ts").ValidateFormOptions;
		connectedCallback(): void;
		disconnectedCallback(): void;
		validateForm(event: any): void;
	}

	export {};
}

declare module 'winduum-elements/components/image/index.js' {
	export function Image<T extends CustomElementConstructor>(Element: T): T;

	export {};
}

declare module 'winduum-elements/components/popover/index.js' {
	import type { WebuumElement } from 'webuum';
	export class Popover extends WebuumElement {
		static props: {
			$autoUpdate: null;
			$placement: null;
		};
		$open: boolean;
		connectedCallback(): void;
		showPopover({ source }: {
			source: any;
		}): Promise<void>;
		$cleanup: (() => void) | undefined;
		$source: any;
		
		togglePopover(options?: boolean | TogglePopoverOptions | undefined): boolean;
		
		togglePopover(options: {
			source: HTMLElement;
		}): void;
	}

	export {};
}

declare module 'winduum-elements/components/range/index.js' {
	import type { WebuumElement } from 'webuum';
	export class Range extends WebuumElement {
		static parts: {
			$start: null;
			$end: null;
		};
		connectedCallback(): void;
		setValue({ target }: {
			target: any;
		}): Promise<void>;
		partConnectedCallback(name: any): void;
	}

	export {};
}

declare module 'winduum-elements/components/tabs/index.js' {
	import type { WebuumElement } from 'webuum';
	export class Tabs extends WebuumElement {
		static parts: {
			$tab: null;
			$tabpanel: null;
		};
		toggle({ source }: {
			source: any;
		}): Promise<void>;
	}

	export {};
}

declare module 'winduum-elements/components/toast/index.js' {
	import type { WebuumElement } from 'webuum';
	export class Toast extends WebuumElement {
		
		$showOptions: ShowOptions;
		
		$closeOptions: CloseOptions;
		connectedCallback(): void;
		show(): Promise<void>;
		close(): Promise<void>;
	}
	export type ShowOptions = import("winduum/src/components/toast/index.d.ts").ShowToastOptions;
	export type CloseOptions = import("winduum/src/components/toast/index.d.ts").CloseToastOptions;

	export {};
}

declare module 'winduum-elements/components/toaster/index.js' {
	import type { WebuumElement } from 'webuum';
	export class Toaster extends WebuumElement {
		
		$closeOptions: CloseOptions;
		connectedCallback(): Promise<void>;
		$observer: MutationObserver | undefined;
		close(): Promise<void>;
	}
	export type CloseOptions = import("winduum/src/components/toaster/index.d.ts").CloseToastOptions;

	export {};
}

//# sourceMappingURL=index.d.ts.map