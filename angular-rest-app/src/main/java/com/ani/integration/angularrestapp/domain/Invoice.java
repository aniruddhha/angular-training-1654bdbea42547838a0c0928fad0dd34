package com.ani.integration.angularrestapp.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;


@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, unique = true)
    private String invNum;

    @Column(nullable = false)
    private LocalDate inDt;

    @Column(nullable = false)
    private Double amount;

    private Integer status;
}
