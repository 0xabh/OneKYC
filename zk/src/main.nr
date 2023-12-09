use dep::std;

fn main(pub_age: pub Field, pub_dob: pub str<10>, pan_card_no: str<10>, age: Field, dob: str<10>) {
    assert(pub_age == age);
    assert(pub_dob == dob);
}

#[test]
fn test_main() {
    
    main(20, "01-01-2001", "AXXXXXXXXF", 20, "01-01-2001");
    
}
