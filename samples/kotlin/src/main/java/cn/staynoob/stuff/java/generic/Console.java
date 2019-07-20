package cn.staynoob.stuff.java.generic;

import kotlin.jvm.Volatile;

import java.util.function.Supplier;

public class Console {

    @Volatile
    private static boolean isDebugEnabled = true;

    public static void debug(
            @SuppressWarnings("TypeParameterExplicitlyExtendsObject")
                    Supplier<? extends Object> supplier
    ) {
        if (isDebugEnabled) {
            System.out.println(supplier.get());
        }
    }

    public boolean isDebugEnabled() {
        return isDebugEnabled;
    }

    public void setDebugEnabled(boolean debugEnabled) {
        isDebugEnabled = debugEnabled;
    }
}
