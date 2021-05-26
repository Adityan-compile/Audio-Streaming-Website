import { createStore } from "vuex";

import auth from "./modules/auth";
import utils from "./modules/utils";
import uploads from "./modules/uploads";
import user from "./modules/user";

export default createStore({
	modules: {
		auth,
		utils,
		uploads,
		user,
	},
});
