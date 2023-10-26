import java.util.HashMap;

public class PangramCheck {
    public static boolean isStringPAngram(String s) {
       boolean isPangram=true;
        s = s.toLowerCase();
       for(char i='a';i<='z';i++){
           if(!s.contains(String.valueOf(i))){
               isPangram=false;
               break;
           }
       }
       if(isPangram){
           return true;
       }else{
           return false;
       }
        
    }

    public static void main(String[] args) {
        String str = "abcdefghijklmnopqrstuvwxyZ"; 
        boolean isPangram = isStringPAngram(str);
        System.out.println(isPangram);
    }
}

