const fs = require( 'fs' );
const path = require( 'path' );

module.exports = ( customPath ) =>
{
	let envPath;

	if ( customPath )
	{
		if ( ! fs.existsSync( customPath ) )
		{
			console.log( `ERROR 💥 ${customPath} does not exist!` );

			process.exit( 1 );
		}
		envPath = customPath;
	}

	if ( ! envPath )
	{
		global.appRoot = path.resolve( `${__dirname}/../../` );
		envPath = `${global.appRoot}/.env`;
		
		if ( ! fs.existsSync( envPath ) )
		{
			fs.writeFileSync( envPath, '', err => console.log( '.env file created.' ) );
			
			return console.log( 'Configuratons not available! Please specify them in the .env file.' );
		}
	}
	const configurations = fs.readFileSync( envPath, 'utf-8' );
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