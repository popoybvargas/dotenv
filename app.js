const fs = require( 'fs' );

module.exports = ( customPath = null ) =>
{
	let path = customPath;

	if ( ! path )
	{
		if ( ! fs.existsSync( '.env' ) )
		{
			fs.writeFileSync( '.env', '', err => console.log( '.env file created.' ) );

			return console.log( 'Configuratons not available! Please specify them in the .env file.' );
		}
		path = '.env';
	}
	const configurations = fs.readFileSync( path, 'utf-8' );
	let configurationsArray = [];

	if ( configurations )
	{
		configurationsArray = configurations.split( '\n' );
		configurationsArray.forEach( config =>
		{
			const key = config.substr( 0, config.indexOf( '=' ) );
			const value = config.substr( config.indexOf( '=' ) + 1 );

			if ( key ) { process.env[ key ] = value; }
		});
	}
	else
	{
		console.log( 'No available configuraton! Please specify them in the .env file.' );
	}
}