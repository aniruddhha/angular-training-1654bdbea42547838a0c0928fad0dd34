package com.ani.integration.angularrestapp.dto;


import lombok.*;

import java.time.LocalDate;

@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class InvoiceDto {
    private Long id;
    private String invNum;
    private LocalDate inDt;
    private Double amount;
    private Integer status;
}
