import { Link } from "react-router-dom";
import CollapseItem from "./CollapseItem";
function Home(){
    return(
        <div className="mainHolder">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"></link>
            <div className="headingDivHolder">
                <h1
                   style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: '30%' }}
                > <img src="/VentureVault.jpg" className="myPic"/> VentureVault Kenya. </h1>
                <p className="pointOne"> Operating Africa and beyond </p>
            </div>
            <hr/>
            <h2
                 style={{ display: 'flex', alignItems: 'center', gap: '40%' }}
            > Our accounts and press releases <h4 className="toFollow"> Follow us </h4></h2>
            <div className="AccountShowDiv">
                <div className="AccountDiv">
                    <img src="/salary account.jpg" className="Accountpic"/>
                    <p> Open a salary account and manage your income with interest. </p>
                    <p> To proceed to account creation <a href="#" className="lastLink"> Click here </a></p>
                </div>
                <div className="AccountDiv">
                    <img src="/hekima account.jpg" className="Accountpic"/>
                    <p> Open a saving account and hit new target and win our jackpots. </p>
                    <a href="#" className="lastLink"> Open now </a>
                </div>
                <div className="AccountDiv">
                    <img src="/business account.jpg" className="Accountpic"/>
                    <p> Having an asset account enables you to withdraw your money anytime at your convinient. </p>
                    <a href="#" className="lastLink"> Click here </a> <p> To open the account. </p>
                </div>
            </div>
            <div>
                <div className="descriptionDiv">
                    <CollapseItem title="Know more about venturevault">
                         VentureVault is a digital platform that offers an oppotunity for saving and small business growth.
                    </CollapseItem>

                    <CollapseItem title="Why Choose Us?">
                         We provide affordable services that are easily accesible from your convinient. 
                    </CollapseItem>
                </div>
            </div>
            <div className="offerDiv">
                <h2> Get more offers in market </h2>
                <p> Open a business account today and qualify for hot deals. </p>
                <p> To proceed <a href="#" className="lastLink"> Click here </a></p>
            </div>
            <div className="AccountManage">
                <h1> Manage all your services in one account. </h1>
                <p> Want to open it now? <a href="#" className="lastLink"> Click here </a></p>
            </div>
            <footer>
                <p> &copy; Venturevault Kenya </p>
                <p> VentureVault @2025: All rights reserved </p>
                <a href="#" className="lastLink"> WhatsApp us </a>
                <a href="#" className="lastLink"> Follow us on linkedIn </a>
                <p> Our branches and offices: </p>
                <a href="#" className="lastLink"> Nakuru </a>
                <a href="#" className="lastLink"> Nairobi </a>
                <a href="#" className="lastLink"> Kisumu </a>
                <p> A trusted home of investment for over 25 years. </p>
            </footer>
        </div>
    );
}
export default Home