/* This object is a container of magic numbers and strings which were considered interesting to be centralized in only one file */

var Config = Object.freeze({

    /* GAME */
    PIECES_ASSET_KEY: "pieces",
    PIECES_ASSET_PATH: "../../assets/spritesheets/domino.png",
    PIECES_FRAME_WIDTH: 30,
    PIECES_FRAME_HEIGHT: 60,
    DOMINO_PIECES_MAX_VALUE: 6,
    DOMINO_PIECES_NUMBER: 28,

    /* CONNECTION */
    SERVER_PORT_SUFFIX: ":3001/",
    TIMEOUT: 3,

    /* Version number */
    VERSION_NUMBER: "0.2.0",

    /* System Name */
    SYSTEM_NAME: "Dominó Amazonense",

    /* Texts */
    LOGIN_INVALID_TEXT: "Usuário ou senha inválidos",
    ERROR_CONNECTION_TEXT: "Não foi possível se conectar com o servidor",
    EMPTY_USER_TEXT: "-",
    LOGOUT_TEXT: "logout",
    VERSUS_TEXT: "X",

    /* Addresses */
    PHP_VALIDATE_LOGIN_ADDRESS: "src/php/checklogin.php",
    PHP_OBTAIN_IP_ADDRESS: "src/php/obtainip.php",
    JAVASCRIPT_SOCKET_IO_ADDRESS: "socket.io/socket.io.js",

    /* CSS Classes */
    CSS_CLASS_ROOM: "room",

    /* CSS Attributes */
    Z_INDEX_RECONNECT_PAGE: 2,
    Z_INDEX_FRONT: 1,
    Z_INDEX_BACK: 0,

    /* HTML Identifiers */
    LOGIN_BUTTON_ID: "login_button",
    LOGIN_IFRAME_ID: "login_iframe",
    LOGIN_INPUT_ID: "login_input",
    PASSWORD_INPUT_ID: "password_input",
    LOGIN_ERROR_DIV_ID: "login_error_div",

    ROOMS_IFRAME_ID: "rooms_iframe",
    ROOMS_UL_ID: "rooms_ul",
    LOGOUT_BUTTON_ID: "logout_button",

    WAIT_PLAYERS_IFRAME_ID: "wait_players_iframe",
    BACK_BUTTON_ID: "back_button",
    WAIT_PLAYERS_UL_ID: "wait_players_ul",

    READY_IFRAME_ID: "ready_iframe",
    READY_COUNTDOWN_DIV_ID: "ready_countdown",
    READY_UL_ID: "ready_ul",
    READY_COUNTDOWN_SECONDS: 30,
    READY_COUNTDOWN_TICK_MILIS: 1000,

    GAME_IFRAME_ID: "game_iframe",
    GAME_DIV_WIDTH: 960,
    GAME_DIV_HEIGHT: 600,
    GAME_DIV_ID: "game_div",
    PLAY_STATE_KEY: "play_state",
    RECONNECT_IFRAME_ID: "reconnect_iframe"
});