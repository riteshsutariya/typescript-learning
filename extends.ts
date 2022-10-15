/*
 * we might have a BasicAddress type that describes the fields necessary for sending letters and
 *packages in the U.S.
 */
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
/*
 *In some situations that's enough, but addresses often have a unit number associated with them if
 *the building at an address has multiple units. We can then describe an AddressWithUnit .
 */
interface AddressWithUnit {
  name?: string;
  unit: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

/*
 * This does the job, but the downside here is that we had to repeat all the other fields from
 * BasicAddress when our changes were purely additive. Instead, we can extend the original
 * BasicAddress type and just add the new fields that are unique to AddressWithUnit .
 */

interface AddressWithUnitRetouched extends BasicAddress {
  unit: string;
}

/*
 * The extends keyword on an interface allows us to effectively copy members from other
 * named types, and add whatever new members we want. This can be useful for cutting down the
 * amount of type declaration boilerplate we have to write, and for signaling intent that several
 * different declarations of the same property might be related.
 */

// interface s can also extend from multiple types.

const address1: BasicAddress = {
  name: "Home Address",
  street: "4th wall street",
  city: "Bostan",
  country: "USA",
  postalCode: "12344543",
};

console.log(address1);

const address2: AddressWithUnitRetouched = {
  name: "Office Address",
  street: "Dow Street",
  unit: "34 Core Unit",
  city: "Washington DC",
  country: "USA",
  postalCode: "3423424",
};
console.log(address2);
