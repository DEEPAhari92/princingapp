import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css"
import userEvent from '@testing-library/user-event';


function App() {
  const data = [
    {
      name : "Free",
      price : 0,
      period : "month",
      features : [
        {
          title : "Single User" ,
          isEnable : true

        },
        {
          title : "5GB Storage" ,
          isEnable : true

        },
        {
          title : "Unlimited Public Projects" ,
          isEnable : true

        },
        {
          title : "Community Access" ,
          isEnable : true

        },
        {
          title : "Unlimited Private Projects" ,
          isEnable :false

        },
        {
          title : "Dedicated Phone Support" ,
          isEnable :false

        },
        {
          title : "Free Subdomain" ,
          isEnable : false

        },
        {
          title : "Monthly Status Reports" ,
          isEnable : false

        }
      ]
    },
    {
      name : "Plus",
      price : 9,
      period : "month",
      features : [
        {
          title : "5 Users" ,
          isEnable : true,
          isBold : true

        },
        {
          title : "50GB Storage" ,
          isEnable : true

        },
        {
          title : "Unlimited Public Projects" ,
          isEnable : true

        },
        {
          title : "Community Access" ,
          isEnable : true

        },
        {
          title : "Unlimited Private Projects" ,
          isEnable : true

        },
        {
          title : "Dedicated Phone Support" ,
          isEnable : true

        },
        {
          title : "Free Subdomain" ,
          isEnable : true

        },
        {
          title : "Monthly Status Reports" ,
          isEnable :false

        }
      ]
    },
    {
      name : "Pro",
      price : 49,
      period : "month",
      features : [
        {
          title : "Unlimited User" ,
          isEnable : true,
          isBold : true

        },
        {
          title : "150GB Storage" ,
          isEnable : true

        },
        {
          title : "Unlimited Public Projects" ,
          isEnable : true

        },
        {
          title : "Community Access" ,
          isEnable : true

        },
        {
          title : "Unlimited Private Projects" ,
          isEnable : true

        },
        {
          title : "Dedicated Phone Support" ,
          isEnable : true

        },
        {
          title : "Free Subdomain" ,
          isEnable : true

        },
        {
          title : "Monthly Status Reports" ,
          isEnable : true

        }
      ]
    }
  ]
  return (
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((item)=>{
return <Card item = {item}></Card>
        })
      }
    </div>
    </div>
    </section>
  );
}

export default App;
