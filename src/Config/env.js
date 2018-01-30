var env = "https://uatapi2.renrenbx.com";
if (checkEnv("uatapi2") > 0) {
	env = "//uatapi2.renrenbx.com";
} else if (checkEnv("api2") > 0) {
	env = "//api2.renrenbx.com";
} else if (checkEnv("localhost") > 0) {
	env = "//localhost:7010";
};

function checkEnv(par) {
	return window.location.origin.indexOf(par);
}

export default env;