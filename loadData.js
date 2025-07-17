fetch(
        "https://opensheet.elk.sh/1N99ZxvqERsNDrpHDudUraMskA8Pcr9jR7Wh5tXmBnbA/main"
        ).then(response=>response.json())
        
        .then(data=>{ editSite(data[0].count, data[0].lastPic) })

        function editSite(count, last){
            let mod10 = count % 10
            let tens = count - mod10
            let next
            
                if (mod10 < 3){next = 3;barLen=3;
                }else if  (mod10 < 5){next = 5;barLen=2;
                }else if  (mod10 < 7){next = 7;barLen=2;
                }else if  (mod10 < 10){next = 10;barLen=3;}

                let barProg = barLen - (next - mod10);
                let missing = next - mod10;
            
                next += tens
                
            //<label id="label1" for="bar">${next-barLen}</label>

            document.body.innerHTML = `
            
            <div class="header-row">
                <h1>☭ Lucy&Emli GbR</h1>
                <br>
                
            </div>
            <div class="display">
            <h2>Donations: ${count}</h2><br>
                <h4>Next Goal:</h3><br>
                <h2>${next} gifted Monsters</h2><br>
                <h4>${next - missing}/${next}</h4><br>
                    <div class="barDiv">
                    
                    <progress id="bar" value="${barProg}" max="${barLen}"></progress>
                    </div>
                    <br>
                    <h4>${missing} missing!</h3><br>
           
            <a href="whatsapp://send?text=*Coupon für 1 Monster <3*" data-action="share/whatsapp/share"><h1>DONATE :3</h1></a>

            
                
            </div>
            
            
            `

            
        }