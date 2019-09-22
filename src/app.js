const log = false;

const showCustomPage = ({ customNewTabUrl, customNewTabTitle, customNewTabTheme }) => {
	log && console.debug( '[showCustomPage] init', { customNewTabUrl, customNewTabTitle, customNewTabTheme } );

	if ( customNewTabTitle ) {
		document.title = customNewTabTitle;
	}

	// If theme set to dark (1), set body background to appropriate Firefox grey
	if ( customNewTabTheme == 1 ) {
		document.body.style.backgroundColor = '#39383D';
	}

	// no tab URL set, do nothing
	if ( !customNewTabUrl || customNewTabUrl.length === 0 ) {
		log && console.debug( '[showCustomPage] no tab url set' );
		return;
	}

	document.documentElement.classList.add( 'cntp-has-loaded' );

	// The `type="content"` attribute is used for security purposes to avoid
	// giving the iframe a privileged context that could be used to
	// access browser (cookies, history, etc) or user files.
	// See https://mdn.io/Displaying_web_content_in_an_extension_without_security_issues
	const iframe = document.getElementById( 'cntp-iframe' );
	iframe.src = customNewTabUrl;

};

const init = _ => {
	browser.storage.sync.get([ 'customNewTabUrl', 'customNewTabTitle', 'customNewTabTheme' ])
		.then( showCustomPage );
};

init();
