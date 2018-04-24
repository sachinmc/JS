//var emailData

function mailCount(emailData) {
  // split email data based on delimiter ##||## - result in an array
  // this should give the count of emails

  // split an email based on delimiter #/#
  // it returns 5 parts, we are interested in Date part

  // a retrieveDate() function, returns an array
  // then find the min() and max() values of this array
  // this should give us the date range.

  var emails = emailData.split('##||##');
  var emailCount = emails.length;
  var emailDates;

  emailDates = emails.map(function (email) {
    return new Date(email.split('#/#')[2].match(/\d{2}-\d{2}-\d{4}/)[0]);
  });

  emailDates.sort(function compareDates(date1, date2) {
    if (date1.getTime() < date2.getTime()) {
      return -1;
    } else if (date1.getTime() > date2.getTime()) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log('Count of Email: ' + String(emailCount));
  console.log('Date Range: ' +
               emailDates[0].toDateString() + ' - ' +
               emailDates[emailDates.length - 1].toDateString());
}

mailCount(emailData);

// console output
// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016

// The objective of this practice problem is to build a function that parses a
// string of email data. The function takes an argument that contains the data,
// parses it, then produces two basic statistics about the email:

// The number of email messages found in the string
// The date range of the email messages
// The email messages string has the following characteristics:

// The string contains multiple email messages separated by the delimiter string ##||##.

// Each email message has five parts. The delimiter string #/# separates the parts.

// The five parts are:

// Sender
// Subject
// Date
// Recipient
// Body
// All five parts occur in the sequence shown above.
