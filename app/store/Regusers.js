Ext.define('Login.store.Regusers', {
	extend: 'Ext.data.Store',
	requires: "Ext.data.proxy.LocalStorage",
	config: {
		model: 'Login.model.Reguser',
		proxy: {
			type: 'localstorage',
			},
			
			reader:{
				rootproperty: 'users',
				type: 'json'
			}
		}		
	},
	autoLoad: true
});