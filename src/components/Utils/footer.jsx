import React from "react";
import FooterItem from "./footerItem";


class Footer extends React.Component {

  render() {
    return (
      <div>
        <div className="footer" id="footer">
          <div className="container">
            <FooterItem
              title="LINKS"
              i1="Home"
              i2="Categories"
              i3="My Offers"
              i4="Account"
            />
            <FooterItem
              title="LINKS"
              i1="Oakar Services Ltd."
              i2="Reach U"
              i3="MFA Estonia"
              i4="Murang'a County"
            />
            <FooterItem
              title="LEGAL"
              i1="Terms and Conditions"
              i2="Privacy Policy"
            />
            <FooterItem
              title="CONTACTS"
              i1="info@murangaonlinesoko.com"
              i2="+254 700 000 000"
              i2="+254 733 000 000"
              social={true}
            />
          </div>
          <h6>Copyright 2021. All rights reserved.</h6>
        </div>
      </div>
    );
  }
}

export default Footer;
