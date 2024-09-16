import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, IconButton, Tooltip, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PeopleService } from "../../domain/services/people/people";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function PeopleList() {
    const [people, setPeople] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const peopleList = await PeopleService.getAllPeople();
                setPeople(peopleList);
            } catch (error) {
                console.error('Error fetching people:', error);
            }
        };
        fetchPeople();
    }, []);

    const handleEdit = (id: number) => {
        navigate(`/people/${id}/edit`);
    };

    const handleDelete = async (id: number) => {
        try {
            await PeopleService.deletePeople(id);
            setPeople(people.filter(person => person.id !== id));
        } catch (error) {
            console.error('Error deleting person:', error);
        }
    };

    return (
        <Container maxWidth="md">
            <Box display="flex" flexDirection="column" alignItems="center" gap={3} mt={4}>
                <Typography variant="h4" gutterBottom>
                    List of People
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigate('/people/add')}>
                    Add New Person
                </Button>
                <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {people.length > 0 ? (
                                people.map((person) => (
                                    <TableRow key={person.id}>
                                        <TableCell>{person.id}</TableCell>
                                        <TableCell>{person.name}</TableCell>
                                        <TableCell>{person.email}</TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Tooltip title="Edit">
                                                    <IconButton onClick={() => handleEdit(person.id)} color="primary">
                                                        <EditIcon />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton onClick={() => handleDelete(person.id)} color="secondary">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">No people found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}