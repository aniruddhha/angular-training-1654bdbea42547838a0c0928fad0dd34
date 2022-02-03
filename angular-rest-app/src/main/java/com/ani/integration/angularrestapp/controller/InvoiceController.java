package com.ani.integration.angularrestapp.controller;

import com.ani.integration.angularrestapp.dto.AppRes;
import com.ani.integration.angularrestapp.dto.InvoiceDto;
import com.ani.integration.angularrestapp.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("/invoice")
@RestController
public class InvoiceController {

    @Autowired
    private InvoiceService service;

    @PostMapping
    public ResponseEntity<AppRes<Integer>> createNewInvoice(@RequestBody InvoiceDto dto) {

        int op = service.createNeInvoice(dto);
        if(op == 1)
            return ResponseEntity.ok(
                    AppRes.<Integer>builder()
                            .msg("invoice created successfully")
                            .sts("success")
                            .bdy(op)
                            .build()
            );

        return new ResponseEntity<>(
                AppRes.<Integer>builder()
                        .sts("fail")
                        .msg("problem creating invoice")
                        .bdy(0)
                        .build(),
                HttpStatus.BAD_REQUEST
        );
    }

    @GetMapping
    public ResponseEntity<AppRes<List<InvoiceDto>>> invoiceList(){
        List<InvoiceDto> invoices = service.findAllInvoices();

        return ResponseEntity.ok(
            AppRes.<List<InvoiceDto>>builder()
                    .sts("success")
                    .msg("all invoices")
                    .bdy(invoices)
                    .build()
        );
    }
}
