package cn.staynoob.stuff;


import cn.staynoob.stuff.java.User;
import org.junit.jupiter.api.Test;

class UserTest {

    Boolean isJohnSnow(User user) {
        String fullName = user.getFullName();
        if (fullName != null)
            return fullName.equals("John Snow");
        String email = user.getEmail();
        if (email != null)
            return email.startsWith("john_snow");
        String phoneNumber = user.getPhoneNumber();
        if (phoneNumber != null)
            return phoneNumber.equals("some phone number");
        return null;
    }

    void greeting(User user) {
        Boolean isJohnSnow = isJohnSnow(user);
        if (isJohnSnow != null && isJohnSnow) {
            sendMessage(user, "You know nothing!");
        }
//        if (isJohnSnow(user)) {
//            sendMessage(user, "You know nothing!");
//        }
    }

    @Test
    void test100() {
        User user = new User();
        greeting(user);
    }

    void sendMessage(User user, String message) {
        System.out.println(user);
        System.out.println(message);
    }
}