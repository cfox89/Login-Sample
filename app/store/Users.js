Ext.define('Login.store.Users', {
	extend: 'Ext.data.Store',

	config: {
		model: 'Login.model.User',
		proxy: {
			type: 'ajax',
			url: 'data/users.json',
			reader:{
				rootproperty: 'users',
				type: 'json'
			}
		}		
	},
	autoLoad: true
});