/**
 * Created by omgitsg on 10/1/15.
 */
Polls = new Mongo.Collection('polls');

if (Meteor.isServer) {

  // This code only runs on the server

  Meteor.publish("polls", function () {

    return Polls.find();

  });

}

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("polls");
}