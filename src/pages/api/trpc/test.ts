import { NextApiRequest, NextApiResponse } from "next";
import scrapeIt from "scrape-it";



export default  function handler({url}) {
 
    console.log('begin the request')
           let rows = []
    url ="https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jZBPT8MwDMU_C4ceqU1Ku8KtiC38G1upEMUXlELIKqVJ1WWr-u3JxqloDHyz_XvPTwaCEsiIba2Eq60R2vevlLzFWYLsJsUFn7Ep5rOLq_x6ys_w_hxexgAWy9gDy3n0gE_IMQH6jx5_qQz_1tMYSec8wfwxyxdsEiMW7CdwIOIeOJbhaAo-gTsgpW31_bDMVFGqgDr5KTvZhZvOj1fOtevLAAPs-z5U1iotw3fbBHhIsrJrB-WY3HE7l72JEx-i32ivJr9qhRmKoamsP8SiFKGQBtrmucT69pSqIdJbdfIFQpHYkA!!/p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=0&reportType=0&symbol=2380"
   scrapeIt(url, { 
    
  titles: " thead.cf .numeric", 
       values: "tbody .numeric",
       labels: "tbody tr td:first-child",
  
  
   }).then(({ data, response }) => {
       console.log(`Status Code: ${response.statusCode}`)
       


    while (data.values.toString().includes('\t'))
        data.values = data.values.toString().replace('\t', '')
       
    while (data.values.toString().includes('\n'))
        data.values = data.values.toString().replace('\n', '')
       
  
       
    while (data.values.toString().includes('\r')) 
        data.values = data.values.toString().replace('\r', ' ')
       
    while (data.values.toString().includes('--')) 
        data.values = data.values.toString().replace('--', '   -   -')
         
    
    while (data.values.toString().includes('   ')) 
        data.values = data.values.toString().replace('   ', '&')
       
     while (data.values.toString().includes('  ')) 
        data.values = data.values.toString().replace('  ', '&')

    while (data.values.toString().includes(',')) 
     data.values = data.values.toString().replace(',', '')
    
     data.values = data.values.split("&")
       
 
    data.values = data.values.filter((value) => value != '')
       data.values = data.values.map((value) => value.trim())
       
       
       data.titles= data.titles.replace("Balance Sheet", "")
         data.titles = data.titles.slice(0,10)+"&"+ data.titles.slice(10,20)+"&"+data.titles.slice(20,30)+"&"+data.titles.slice(30,40)
       
     data.titles = data.titles.split("&") 


       let allowedLables = ["Current Assets", "Inventory", "Investments", "Fixed Assets", "Other Assets", "Total Assets", "Current Liabilities", "Non-Current Liabilities", "Other Liabilities", "Shareholders Equity", "Total Liabilities and Shareholder Equity", "Minority Interests"]
       for (let i = 0; i < allowedLables.length; i++) {

       
           if (!data.labels.includes(allowedLables[i]?.toString())) {
            allowedLables.splice(i,1)  
        }
       }
       data.labels = allowedLables;
       

       let index = 0;
       data.labels.map((label) => {
           
           let row = label + "," + data.values[index] + "," + data.values[index + 1] + "," + data.values[index + 2] + "," + data.values[index + 3]
           index = index + 4;
           console.log(row)
           rows.push(row)
       })
       console.log(data)

       })

        let newUrl = url.replace("statementType=0","statementType=2")

       scrapeIt(newUrl, { 
    
  titles: "thead.cf .numeric",
       values: "tbody .numeric",
       labels: "tbody tr td:first-child",
  
  
   }).then(({ data, response }) => {

       console.log(`Status Code: ${response.statusCode}`)
       


    while (data.values.toString().includes('\t'))
        data.values = data.values.toString().replace('\t', '')
       
    while (data.values.toString().includes('\n'))
        data.values = data.values.toString().replace('\n', '')
       
  
       
    while (data.values.toString().includes('\r')) 
        data.values = data.values.toString().replace('\r', ' ')
       
    while (data.values.toString().includes('--')) 
        data.values = data.values.toString().replace('--', '   -   -')
         
    
    while (data.values.toString().includes('   ')) 
        data.values = data.values.toString().replace('   ', '&')
       
     while (data.values.toString().includes('  ')) 
        data.values = data.values.toString().replace('  ', '&')

    while (data.values.toString().includes(',')) 
     data.values = data.values.toString().replace(',', '')
    
     data.values = data.values.split("&")
       
 
    data.values = data.values.filter((value) => value != '')
       data.values = data.values.map((value) => value.trim())
       
       
       data.titles= data.titles.replace("Balance Sheet", "")
         data.titles = data.titles.slice(0,10)+"&"+ data.titles.slice(10,20)+"&"+data.titles.slice(20,30)+"&"+data.titles.slice(30,40)
       
     data.titles = data.titles.split("&") 


       let allowedLables = ["Net Income", "Depreciation", "Accounts Receivable", "Inventory","Prepaid Expenses","Accounts Payable", "Other Changes in Oper. Activity", "Purchases of Fixed Assets", "Other Changes in Investing Act.", "Increase in Debts", "Other Changes in Financing Act.", "Cash at Begining of Period", "Cash at End of Period"]
       for (let i = 0; i < allowedLables.length; i++) {

           
           if (!data.labels.includes(allowedLables[i]?.toString())) {
            allowedLables.splice(i,1)  
        }
       }
       data.labels = allowedLables;
       
      

       let index = 0;
       data.labels.map((label) => {
           
           let row = label + "," + data.values[index] + "," + data.values[index + 1] + "," + data.values[index + 2] + "," + data.values[index + 3]
           index = index + 4;
          rows.push(row)
       })
       console.log(rows)
       return rows
})
    
 
}