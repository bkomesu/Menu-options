class Asset {
    constructor (name, type) {
        this.name = name;
        this.type = type; 
    }

    describe () {
        return `${this.name} plays ${this.type}.`;
    }
}

class Group {
    constructor(name) {
        this.name = name;
        this.assets = [];
    }

    addAsset(asset) {
        if (Asset instanceof Asset){
            this.asset.push(asset);
        } else {
            throw new Error (` You can only add an instance of Asset. Argument is not a asset: ${asset}`);
        }
    }

    describe() {
        return `${this.name} has ${this.assets.length} assets.`;
    }
}


class Menu{
    constructor(){
        this.groups=[];
        this.selectedGroup = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection) {
                case '1':
                    this.createGroup();
                    break;
                case '2':
                    this.viewGroup();
                    break;
                case '3':
                    this.deleteGroup();
                    break;
                case '4':
                    this.displayGroups();
                    break;
                default: 
                    selection = 0 ;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new group
        2) view group
        3) delete group 
        4) display all groups
        `);
    } 

    showGroupMenuOptions(groupInfo) {
        return prompt (`
        0) back
        1) create asset
        2) delete asset 
        -------------------
        ${groupInfo}
        `);
    }

    displayGroups() {
        let groupString = '';
        for (let i = 0; i < this.groups.length; i++) {
            groupString += i + ') ' + this.groups[i].name + '\n';
        }
        alert (groupString);
    }

    createGroup() {
        let name = prompt(`Enter name for new groups: `);
        this.groups.push(new Group(name));
    }

    viewGroup() {
        let index = prompt(`Enter the index of the group you wish to view: `);
        if (index > -1 && index < this.groups.length) {
            this.selectedGroup= this.groups[index];
            let description = ' Group Name: ' + this.selectedGroup.name + '\n';
            
            for (let i = 0; i < this.selectedGroup.assets.length; i++){
                description += i + ') ' + this.selectedGroup.assets[i].name + ' - ' + this.selectedGroup.assets[i].type + '\n'; 
            }

            let selection = this.showGroupMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createAsset();
                    break;
                case '2':
                    this.deleteAsset();
            }
        }
    }

    deleteGroup() {
        let index = prompt ('Enter the index of the group you wich to delete');
        if (index > -1 && index < this.groups.length) {
            this.groups.splice(index, 1);
        }
    }

    createAsset() {
        let name = prompt('Enter name for new asset');
        let type = prompt('Enter type for new asset');
        this.selectedGroup.assets.push(new Asset(name, type));
         }

         deleteAsset() {
             let index = prompt('Enter the index of the asset you wish to delete: ');
             if (index > -1 && index < this.selectedGroup.assets.length) {
                 this.selectedGroup.assets.splice(index, 1);             
         }
    }
    
}


let menu = new Menu();
menu.start();
