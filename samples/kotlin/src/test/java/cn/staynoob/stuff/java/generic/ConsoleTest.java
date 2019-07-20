package cn.staynoob.stuff.java.generic;

import org.junit.jupiter.api.Test;

import java.util.function.Supplier;

class ConsoleTest {

    private Supplier<String> supplier = () -> "hello world";

    @Test
    void test100() {
        Supplier<String> supplier = () -> "hello world";

//        // doesn't compile
//        Console.debug(supplier);
//        // also doesn't compile
//        Console.debug((Supplier<Object>) supplier);
    }

}