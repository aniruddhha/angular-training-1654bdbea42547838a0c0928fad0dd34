package com.ani.integration.angularrestapp.service;

import com.ani.integration.angularrestapp.domain.Invoice;
import com.ani.integration.angularrestapp.dto.InvoiceDto;
import com.ani.integration.angularrestapp.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service
public class InvoiceServiceImpl implements  InvoiceService{

    @Autowired
    private InvoiceRepository repository;

    @Override
    public int createNeInvoice(InvoiceDto dto) {

        Invoice inv = repository.save(
                new Invoice(
                        dto.getId(),
                        dto.getInvNum(),
                        dto.getInDt(),
                        dto.getAmount(),
                        dto.getStatus()
                )
        );

        return inv != null ? 1 : 0;
    }

    @Override
    public List<InvoiceDto> findAllInvoices() {
        return repository.findAll()
                .stream()
                .map(
                        inv -> new InvoiceDto(
                                inv.getId(),
                                inv.getInvNum(),
                                inv.getInDt(),
                                inv.getAmount(),
                                inv.getStatus()
                        )
                ).collect(
                        Collectors.toList()
                );
    }

    @Override
    public int markInvoiceAsCleared(String invNum) {
        return 0;
    }
}
