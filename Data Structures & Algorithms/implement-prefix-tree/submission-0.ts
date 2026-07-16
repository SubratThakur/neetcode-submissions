class PrefixTree {
    private root: TrieNode;
    constructor() {
        this.root = new TrieNode(null, new Map());
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let start = this.root;
        word.split('').forEach((char: string)=>{
            if(start.childrens.has(char)){
                start = start.childrens.get(char);
            } else {
                const charMap = new Map();
                const newNode = new TrieNode(char, charMap);
                start.childrens.set(char, newNode);
                start = newNode;
            }
        });
        start.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let curr = this.root;
        for(let i =0;i<word.length;i++){
            if(curr.childrens.has(word.charAt(i))){
                curr = curr.childrens.get(word.charAt(i));
            } else {
                return false;
            }
        }
        return curr.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let curr = this.root;
        for(let i =0;i<prefix.length;i++){
            if(curr.childrens.has(prefix.charAt(i))){
                curr = curr.childrens.get(prefix.charAt(i));
            } else {
                return false;
            }
        }
        return true;
    }
}

class TrieNode {
    val : string | null;
    childrens: Map<string, TrieNode>;
    isEnd: boolean;
    constructor(val: string, childrens: Map<string, TrieNode>){
        this.val = val;
        this.childrens = childrens;
        this.isEnd = false;
    }
}