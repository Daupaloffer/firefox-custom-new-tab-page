const saveOptions = e => {
	e.preventDefault();

	browser.storage.sync.set({
		customNewTabUrl: document.getElementById( 'customNewTabUrl' ).value,
		customNewTabTitle: document.getElementById( 'customNewTabTitle' ).value,
		customNewTabTheme: document.getElementById( 'customNewTabTheme' ).value
	});
};

const restoreOptions = _ => {
	browser.storage.sync.get([ 'customNewTabUrl', 'customNewTabTitle', 'customNewTabTheme' ])
		.then( options => {
			document.getElementById( 'customNewTabUrl' ).value = options.customNewTabUrl || '';
			document.getElementById( 'customNewTabTitle' ).value = options.customNewTabTitle || '';
			document.getElementById( 'customNewTabTheme' ).value = options.customNewTabTheme || '0'; // Defaults to 0 for Light
		});
};

document.addEventListener( 'DOMContentLoaded', restoreOptions );
document.querySelector( 'form' ).addEventListener( 'submit', saveOptions );
