package com.ani.integration.angularrestapp.service;

import com.ani.integration.angularrestapp.dto.InvoiceDto;

import java.util.List;

public interface InvoiceService {
    int createNeInvoice(InvoiceDto dto);

    List<InvoiceDto> findAllInvoices();

    int markInvoiceAsCleared(String invNum);
}
