Ext.define('Login.view.Login', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginview',
    
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.util.DelayedTask',

    ],

    config: {
        title: 'Log in',
        items: [
            
            {
                xtype: 'fieldset',
                title: 'Credentials',
                iconCls: 'home',
                defaults: {
                    labelWidth: '40%'
                },

                items: [
                    {
                        xtype: 'textfield',
                        name: 'username',
                        itemId: 'userNameTextField',
                        placeHolder: 'Username'
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'password',
                        itemId: 'passwordTextField',
                        placeHolder: 'Password'
                    },
                ]
            },
            {
                xtype: 'button',
                itemId: 'logInButton',
                text: 'Log in',
                ui: 'confirm'
            }
        ],
        listeners: [{
            delegate: '#logInButton',  //tap events on the component with the id logInButton will
            event: 'tap',               // be handled by the onLogInButtonTap method
            fn: 'onLogInButtonTap'
        }]
    },

    onLogInButtonTap: function () {
            //me variable allows you to keep a reference to the Login view and use it inside the DelayedTasks anonymous function
            //this function runs in a different execution context,where the this variable is a reference to the Window object
        var me = this;
        //create reference to the view, label, username and password fields and the values
        var usernameField = me.down('#userNameTextField'),
            passwordField = me.down('#passwordTextField'),
            label = me.down('#signInFailedLabel');

       // label.hide(); //perform this as you dont know if label visible due to prior login error

        var username = usernameField.getValue(),
            password = passwordField.getValue();
         
        // Using a delayed task in order to give the hide animation above
        // time to finish before executing the next steps.
        var task = Ext.create('Ext.util.DelayedTask', function () {

           // label.setHtml(''); // first resets the error labels html

            me.fireEvent('signInCommand', me, username, password); //fires event to signal the conrtroller that a request to sign in has occured

            usernameField.setValue(''); //resets the values of username and password
            passwordField.setValue('');
        });
            // want labels hide animation to finish before firing the loginCommand event
        task.delay(500);
    },    
});