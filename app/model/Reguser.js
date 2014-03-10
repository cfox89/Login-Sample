Ext.define('Login.model.Reguser', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{name: 'firstname', type: 'string'},
			{name: 'lastname', type: 'string'},
			{name: 'username', type: 'string'},
			{name: 'email', type: 'string'},
			{name: 'password', type: 'string'},
			{name: 'dateofbirth', type: 'string'}
		]
		proxy:{
			type: 'localstorage',
		}

	}
});