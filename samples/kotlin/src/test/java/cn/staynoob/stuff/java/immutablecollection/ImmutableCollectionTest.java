package cn.staynoob.stuff.java.immutablecollection;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class ImmutableCollectionTest {
    @Test
    @DisplayName("mutate a collection")
    void test100() {
        List<Integer> list = Arrays.asList(1, 2);
        list.add(3);
        assertThat(list).hasSize(3);
    }
}
