import Controller from '@ember/controller';
import { match, not,gte,and  } from '@ember/object/computed';
export default Controller.extend({
	emailAddress: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough:	gte('message.length',5),
  isBothTrue: and('isValid','isLongEnough'),
  isDisabled: not('isBothTrue'),
  actions: {

    saveInvitation() {
      alert(`Saving the email address:${this.get('emailAddress')} and message:${this.get('message')} are in progress:`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')} and message: ${this.get('message')}`);
      this.set('emailAddress', '');
	  this.set('message','')
    }
  }
  
});
