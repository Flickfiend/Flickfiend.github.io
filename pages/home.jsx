import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Card,
  CardContent,
  CardHeader,
  F7Row,
  F7Button,
  F7Link,
  CardFooter,
  F7BlockFooter,
  F7Block
} from 'framework7-react';

export default () => (
  <Page name="home">
    <Card noShadow padding={false} style={{ height: '40%'}} >
      <CardContent>
        <img src="../static/FlickFiend Text.png" width="100%" />
      </CardContent>
    </Card>
    
    <Card expandable outline style={{ height: "550px" }}>
          <CardContent>
          <Link cardClose color="black" className="card-opened-fade-in" style={{position: 'absolute', right: '15px', top: '15px'}} iconF7="xmark_circle_fill" />
          <center>
            
        <CardHeader class="display-block" >
                <h1>Flickfiend: Angelic</h1>
        </CardHeader>
        <img src="../static/Flickfiend White.png" style={{height: "350px"}}></img>
        <div class="card-opened-fade-out">
        



        </div></center>
            <div>
                <h1>What is Flickfiend?</h1>
                <p>Flickfiend is an innovative Underwater Hockey Training aid!</p>
                <p>Our protected design introduces an tiered hurdle system to help you train.</p>
                <p>Gone are the days of flicking over a tiny. With Flickfiend, you can easily record your progress via our colour-coded scheme!</p>
                <p>Currently, our product has been featured as part of the training regime used by the U19 GB Womens team in the run up to the Sheffield 2019 World Championships.</p>
                <br></br>
                <p>Currently Flickfiend Dark Mode retails at <s>£80.00 incl. postage</s></p>
                <p> <b>New back-to-training Offer: £75.00 incl. postage (UK)</b></p>
                <p>Want to purchase? Contact us at flickfiend@hotmail.com</p><p><F7Link external href="https://www.facebook.com/UWHPro">Chat to us on  Facebook </F7Link></p>
                <br></br>
                <br></br>
                <p>Who are Expo-Tech?</p>
                <p>Expo Tech was founded by Sam Rhodes, who frustrated at being unable to flick, and the lack of progress decided to create an UWH Training Aid.</p>
                <p>Expo Tech uses emerging technologies to break boundaries and push what is possible.</p>
                <F7Link external href="https://www.facebook.com/UWHPro">Want to hear more? Visit our about us page!</F7Link>
              <img src="../static/Dark Mode Transparent Background.png" style={{ width: '100%' }}></img>
            </div>
          </CardContent>
        </Card>
      
        <Card expandable outline style={{ height: "550px" }}>
          <CardContent>
          <Link cardClose color="black" className="card-opened-fade-in" style={{position: 'absolute', right: '15px', top: '15px'}} iconF7="xmark_circle_fill" />
          <center><div>
        <CardHeader class="display-block" className="toolbar-hidden">
                <h1>Flickfiend: Dark-Mode</h1>
        </CardHeader>
        <img src="../static/Dark Mode.png" style={{height: "350px"}}></img>
        



        </div></center>
        <div>
                <h1>Meet Flickfiends Evil Twin!</h1>
                <p>Flickfiend is an innovative Underwater Hockey Training aid!</p>
                <p>Our protected design introduces an tiered hurdle system to help you train.</p>
                <p>Gone are the days of flicking over a tiny. With Flickfiend, you can easily record your progress via our colour-coded scheme!</p>
                <p>Currently, our product has been featured as part of the training regime used by the U19 GB Womens team in the run up to the Sheffield 2019 World Championships.</p>
                <br></br>
                <br></br>
                <p>Currently Flickfiend Dark Mode retails at <s>£80.00 incl. postage</s></p>
                <p> <b>New back-to-training Offer: £75.00 incl. postage (UK)</b></p>
                <p>Want to purchase? Contact us at flickfiend@hotmail.com</p><p><F7Link external href="https://www.facebook.com/UWHPro">Chat to us on  Facebook </F7Link></p>
                <br></br>
                <p>Who are Expo-Tech?</p>
                <p>Expo Tech was founded by Sam Rhodes, who frustrated at being unable to flick, and the lack of progress decided to create an UWH Training Aid.</p>
                <p>Expo Tech uses emerging technologies to break boundaries and push what is possible.</p>
                <F7Link>Want to hear more? Visit our about us page!</F7Link>
            </div>
          </CardContent>
        </Card>

        <Card expandable outline style={{ height: "550px" }}>
        <Link cardClose color="black" className="card-opened-fade-in" style={{position: 'absolute', right: '15px', top: '15px'}} iconF7="xmark_circle_fill" />
          <CardContent>
          <center><div>
        <CardHeader class="display-block" className="toolbar-hidden">
                <h1>Flickfiend Pro</h1>
        </CardHeader>
        <img src="../static/Flickfiend Pro.png" style={{height: "350px"}}></img>
        
        

        </div></center>
        <div>
                <h1>Think you're a pro?</h1><h1>Let's put it to the test!</h1>
                <p>Flickfiend Pro it taller than Flickfiend Angelic/Dark-Mode.</p>
                <p>Can you reach the top rung?! Only 5 Players so far have!</p>
                <p>Train at National Level with Flickfiend Pro!</p>
                <p>This is what they use!</p>
                <p>If you manage to beat our top rung, tag us on <F7Link external href="https://www.facebook.com/UWHPro">Facebook </F7Link></p>
                <br></br>
                <br></br>
                <p>Currently Flickfiend Pro is available in Dark Mode or Angelic. It retails at <s>£90.00 incl. postage</s></p>
                <p> <b>New back-to-training Offer: £85.00 incl. postage (UK)</b></p>
                <p>Want to purchase? Contact us at flickfiend@hotmail.com</p><p><F7Link external href="https://www.facebook.com/UWHPro">Chat to us on  Facebook </F7Link></p>
                <br></br>
                <p>Who are Expo-Tech?</p>
                <p>Expo Tech was founded by Sam Rhodes, who frustrated at being unable to flick, and the lack of progress decided to create an UWH Training Aid.</p>
                <p>Expo Tech uses emerging technologies to break boundaries and push what is possible.</p>
                <F7Link>Want to hear more? Visit our about us page!</F7Link>
            </div>
          </CardContent>
        </Card>


        <hr></hr>
      <footer strong style={{ color:"black"}}>
          <center><h1>Flickfiend Underwater Hockey Equipment</h1>
          <h3>flickfiend@hotmail.com</h3>
          <h3>Owned by Expo Tech Ltd 12970054</h3>
          
          </center>
      </footer>
  </Page>
);