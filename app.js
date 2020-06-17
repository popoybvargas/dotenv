const fs = require( 'fs' );

module.exports = ( customPath = null ) =>
{
	let path = customPath;

	if ( ! path )
	{
		// if ( ! fs.existsSync( `${__dirname}/.env` ) )
		if ( ! fs.existsSync( '.env' ) )
		{
			// fs.writeFileSync( `${__dirname}/.env`, '', err => console.log( 'File created.' ) );
			fs.writeFileSync( '.env', '', err => console.log( 'File created.' ) );
		}
		// path = `${__dirname}/.env`;
		path = '.env';
	}
	const configurations = fs.readFileSync( path, 'utf-8' );
	let configurationsArray = [];
	let configurationsObject = {};

	if ( configurations )
	{
		configurationsArray = configurations.split( '\n' );
		configurationsArray.forEach( config =>
		{
			const key = config.substr( 0, config.indexOf( '=' ) );
			const value = config.substr( config.indexOf( '=' ) + 1 );

			if ( key ) { configurationsObject[ key ] = value; }
		});
	}

	return configurationsObject;
}