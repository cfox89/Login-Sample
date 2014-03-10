Ext.define('Login.model.User', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{name: 'username', type: 'string'},
			{name: 'password', type: 'string'}
		]
	}
});