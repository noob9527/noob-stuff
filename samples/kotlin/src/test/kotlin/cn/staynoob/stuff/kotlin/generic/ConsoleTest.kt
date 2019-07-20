package cn.staynoob.stuff.kotlin.generic

import cn.staynoob.stuff.java.generic.Console
import org.junit.jupiter.api.Test
import java.util.function.Supplier

class ConsoleTest {

    @Test
    fun test100() {
        val supplier: Supplier<String> = Supplier {
            "hello world"
        }
        Console.debug(supplier)
    }

}