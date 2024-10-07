<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sitewp' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '?xr]|wyA<S!2:T`8:n#ZQa;!Z>(oj*.(}N?OE`u[(1+WbcDvxV~*1Jjah[JGvqp;' );
define( 'SECURE_AUTH_KEY',  '-@Pf6mcHH0zDV`-4x*1WEsU!G3P[z&gc[@zn$?6<*Mrw9 Ukjlw(SMQMXdii{*cX' );
define( 'LOGGED_IN_KEY',    'dGX<,H@_YgpTcRL3+::#wXg7GS){0SM))*Lc;oAUj#21y>od-kZ?.g%qh93BNNc.' );
define( 'NONCE_KEY',        'xI~@.NC=NN9RoH[IQ}[<;7-[W0+g:U3,IWn=I#orq{YZ9 EEFU0Ufgt%#yFOpaoy' );
define( 'AUTH_SALT',        '~pj,-3XP?{+(2Xp-,.^,TAgi05KK>f2uZ3m%V?hafDpe{EgVoI*9I/]C+,Y2f|*k' );
define( 'SECURE_AUTH_SALT', '%)L`|]MAx.!_h?B#f-5vhA_jn^-!J1:YlC?OG9)U[ou]Ut~-tYjl`Mk3w?Mh#@-E' );
define( 'LOGGED_IN_SALT',   'W0bbiD2%,&N^Q@<-Nkry.4k%yN$cmhF9v*KGPdc89~JeMTqRMyCWcqjPbZA;rUK0' );
define( 'NONCE_SALT',       'R!<2S>NMJ2Z^W?7S0WV$go9p$!t)7Bza*aYS:D#F.dBCQ=(x6:G4TultafTi4&e=' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
