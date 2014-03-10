Ext.define('Login.view.Register', {
    extend: 'Ext.form.Panel',
    //alias: 'widget.registerview',
    xtype: 'registerview',
    id: 'registerView',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password'
        
    ],

    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Registration Form',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Firstname',
                        labelWrap: true,
                        name: 'firstname',
                        itemId: 'firstnameTextField',
                        placeHolder: 'Enter Firstname',
                        required: true
                    },

                    {
                        xtype: 'textfield',
                        label: 'Lastname',
                        labelWrap: true,
                        name: 'lastname',
                        itemId: 'lastnameTextField',
                        placeHolder: 'Enter Lastname',
                        required: true
                    },

                    {
                        xtype: 'textfield',
                        label: 'Username',
                        labelWrap: true,
                        name: 'username',
                        itemId: 'usernameTextField',
                        placeHolder: 'Enter Username'
                    },

                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        labelWrap: true,
                        name: 'email',
                        itemId: 'emailTextField',
                        placeHolder: 'email@example.com',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        labelWrap: true,
                        name: 'password',
                        itemId: 'passwordField',
                        placeHolder: 'Enter Password'
                    },
                    {
                        xtype: 'textfield',
                        label: 'DateofBirth',
                        labelWrap: true,
                        name: 'dateofbirth',
                        itemId: 'dateofbirthField',
                        placeHolder: 'Date of Birth',
                        required: true
                    }
                ]
            },
              
            {
                xtype: 'button',
                itemId: 'registerButton',
                text: 'Register',
                ui: 'confirm'
            }
        ],
        
        listeners: [{
            delegate: '#registerButton',  //tap events on the component with the id registerButton will
            event: 'tap',               // be handled by the onRegisterButtonTap method
            fn: 'onRegisterButtonTap'

        }]
    },

   

///WORKING READ STORES
 onRegisterButtonTap: function () {

    var me =this;

    var firstnameField = me.down('#firstnameTextField'),
        lastnameField = me.down('#lastnameTextField');
        usernameField = me.down('#usernameTextField');
        emailField = me.down('#emailTextField');
        passwordField = me.down('#passwordField');
        dateofbirthField = me.down('#dateofbirthField');
        


    var firstname = firstnameField.getValue(),
        lastname = lastnameField.getValue();
        lastname = lastnameField.getValue();
        username = usernameField.getValue();
        email = emailField.getValue();
        password = passwordField.getValue();
        dateofbirth = dateofbirthField.getValue();
       
        console.log(firstname);
        console.log(lastname);
        console.log(username);
        console.log(email);
        console.log(password);
        console.log(dateofbirth);

 /*var values = this.getValues();
      //  if (values.username) {  //&& values.password) {
            console.log(values.firstname);
            console.log(values.lastname);
            console.log(values.username);
            console.log(values.email);
            console.log(values.password);
            console.log(values.dateofbirth);*/
            

       /* var userStore = Ext.getStore('Users');
        userStore.load();  

        var username = userStore.findRecord('username', values.username);  
            console.log(username);
            console.log(results);
        };         */
       // console.log('registerCommand');
        me.fireEvent('registerCommand',me, firstname, lastname, username, email, password, dateofbirth);
    },
});