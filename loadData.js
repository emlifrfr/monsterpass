fetch(
        "https://opensheet.elk.sh/1N99ZxvqERsNDrpHDudUraMskA8Pcr9jR7Wh5tXmBnbA/main"
        ).then(response=>response.json())
        
        .then(data=>{ editSite(data[0].count) })

        function editSite(count){
            let mod10 = count % 10
            let next
            
                if (mod10 < 3){next = 3;barLen=3;
                }else if  (mod10 < 5){next = 5;barLen=2;
                }else if  (mod10 < 7){next = 7;barLen=2;
                }else if  (mod10 < 10){next = 10;barLen=3;}

                let barProg = barLen - (next - mod10);
            


            document.body.innerHTML = `
            
            <div class="header-row">
                <h1>EmliMonsertPass</h1>
                <br>
                <h2>Donations: ${count}</h2>
            </div>
            <div class="display">
                <h4>Next Goal:</h3><br>
                <h2>${next} gifted Monsters</h2><br>
                    <div class="barDiv">
                    <label id="label1" for="bar">0</label><progress id="bar" value="${barProg}" max="${barLen}"></progress><label id="label2" for="bar">3</label>
                    </div>
                    <br>
                
            <a href="donate"><h1>DONATE :3</h1></a>
            
                
            </div>
            
            
            `

            
        }