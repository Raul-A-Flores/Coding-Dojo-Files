import java.util.HashMap;

public class Hashmatique{
    public static void main(String[] args){
        HashMap<String, String> map = new HashMap<String, String>();
        map.put("Black Sabbath", "Make a joke and I will sigh, And you will laugh and I will cry");
        map.put("Black Sabbath", "I am Iron Man");
        map.put("Steppenwolf", "Born to be wild");
        map.put("Deep Purple", "Nobody gonna take my car");

        
        String song = map.get("Deep Purple");
        System.out.println(song);

        for (String key : map.keySet()) {
            System.out.println(String.format("Track: %s: Lyrics: %s", key, map.get(key)));
        }
    }

}

