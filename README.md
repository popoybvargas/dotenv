# load.env
Get configuration file and load values.

#### Basic Usage
```
require( 'zv-load.env' )();
```
The above code loads configurations specified in the ***.env*** file in the project's root directory.
> Use the above code as soon as possible (topmost part) in the application's *main* script.

To load configurations from a custom file, specify its path as an argument, e.g.
```
require( 'zv-load.env' )( PATH_TO_CUSTOM_CONFIG_FILE );
```

Configurations will now be loaded as part of the appliation's environment variables ***process.env***. To access configurations, e.g. 

- .env
```
DATABASE_USER=user
DATABASE_PASSWORD=password
```

```
console.log( process.env.DATABASE_USER, process.env.DATABASE_PASSWORD );
```
 > // outputs *user password*
