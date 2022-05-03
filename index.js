'use strict';

const fs = require('fs');
const path = require('path');

module.exports = customEnvFilePath =>
{
	global.appRoot = path.resolve(__dirname + '/../../');
	let envFilePath = global.appRoot + '/.env';

	if (customEnvFilePath && fs.existsSync(customEnvFilePath)) envFilePath = customEnvFilePath;
	else if (!fs.existsSync(envFilePath))
	{
		console.warn('Configuratons not available! Please specify them in the .env file.');

		return fs.writeFileSync(envFilePath, '', () => console.log('.env file created.'))
	}
	
	const configurations = fs.readFileSync(envFilePath, 'utf-8');
	let configurationsArray = [];

	if (configurations)
	{
		configurationsArray = configurations.split('\n');

		configurationsArray.forEach(config =>
		{
			const indexOfEqual = config.indexOf('=');
			
			if (indexOfEqual >= 0)
			{
				const key = config.substring(0, indexOfEqual);
				process.env[key] = config.substring(indexOfEqual + 1);
			}
		});
	}
	else console.error(`No available configuraton in ${envFilePath}!`);
};