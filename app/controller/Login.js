Ext.define('Login.controller.Login', {
     extend: 'Ext.app.Controller',
    config: {
        refs: {
              loginView: 'loginview',
              mainView: 'mainview'
        },

        control: {
            loginView: {
                signInCommand: 'onSignInCommand'
            },

            mainView: {
               signOffCommand: 'onSignOffCommand'
            }
        }
    },
          
       
    // Transitions
    getSlideLeftTransition: function () {
        return { type: 'slide', direction: 'left' };
    },

    getSlideRightTransition: function () {
        return { type: 'slide', direction: 'right' };
    },

    onSignInCommand: function (view, username, password) {
        console.log('Username: ' + username + '\n' + 'Password: ' + password);

        var me = this,
            loginView = me.getLoginView();

        if (username.length === 0 || password.length === 0) {
         Ext.Msg.alert('', 'Please enter your username and password.');
        }
        var userStore = Ext.getStore('Users');
        userStore.load();  

        var username = userStore.findRecord('username', username), 
            password = userStore.findRecord('password', password);  
            
            console.log(password);
            console.log(username);
        
         if (username === null || password === null) {
            Ext.Msg.alert('', 'Incorrect Username or Password');       
                      
        }else{ 

            me.signInSuccess();
        }         
    },
       
    signInSuccess: function () {
        console.log('Signed in');
        Ext.Viewport.add(Ext.create('Login.view.Main'));
        Ext.Viewport.animateActiveItem(this.getMainView(), this.getSlideLeftTransition());
    },

    singInFailure: function (message) {
        var loginView = this.getLoginView();
        loginView.showSignInFailedMessage(message);
        loginView.setMasked(false);
    },

  
});

