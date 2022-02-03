package com.ani.integration.angularrestapp.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Setter
@Getter
public class AppRes<T> {
    private String sts;
    private String msg;
    private T bdy;
}
