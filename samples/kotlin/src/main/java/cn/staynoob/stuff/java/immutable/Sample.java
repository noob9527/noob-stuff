package cn.staynoob.stuff.java.immutable;

public final class Sample {

    private final String field1;
    private final Boolean field2;
    private final Integer field3;
    private final Float field4;
    private final Double field5;

    public Sample(String field1, Boolean field2, Integer field3, Float field4, Double field5) {
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
        this.field4 = field4;
        this.field5 = field5;
    }

    public String getField1() {
        return field1;
    }

    public Boolean getField2() {
        return field2;
    }

    public Integer getField3() {
        return field3;
    }

    public Float getField4() {
        return field4;
    }

    public Double getField5() {
        return field5;
    }
}
