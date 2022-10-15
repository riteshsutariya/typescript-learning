/*
 * The extends keyword on an interface allows us to effectively copy members from other
 * named types, and add whatever new members we want. This can be useful for cutting down the
 * amount of type declaration boilerplate we have to write, and for signaling intent that several
 * different declarations of the same property might be related.
 */
// interface s can also extend from multiple types.
var address1 = {
    name: "Home Address",
    street: "4th wall street",
    city: "Bostan",
    country: "USA",
    postalCode: "12344543"
};
console.log(address1);
var address2 = {
    name: "Office Address",
    street: "Dow Street",
    unit: "34 Core Unit",
    city: "Washington DC",
    country: "USA",
    postalCode: "3423424"
};
console.log(address2);
