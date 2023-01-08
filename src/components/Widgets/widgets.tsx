import React from 'react'
import "./widgets.css"
import InfoIcon from "@mui/icons-material/Info"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"

export const Widgets = () => {

    const newsArticale = (heading:string, subtitle:string) => (
        <div className='widgets__articale'>

        <div className="widgets__articaleLeft">
            <FiberManualRecordIcon/>
        </div> 


        <div className="widgets__articaleRight">

            <h4>{heading}</h4>
            <p>{subtitle}</p>

        </div>

        </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>

        {
            newsArticale("Mahmoud Zakaira Is Creating Wonders", "TOP NEWS - 696969 Readers")
        }

        {
            newsArticale("This Is So Professional, You Should Hire Him", "TOP NEWS - 155468 Readers")
        }

         {
            newsArticale("GitHub Moves to Guard Open Source Against Supply Chain Attacks", "SECURITY - 5548 Readers")
        }

        {
            newsArticale("AI Can Write Code Like Humans—Bugs and All", "BUSINESS - 5748 Readers")
        }
        {
            newsArticale("Bitcoin Breaks $16,925.17 In Value", "CRYPTO - 92348 Readers")
        }
    </div>
  )
}
